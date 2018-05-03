import { h, Component } from 'preact'
import style from './style'

// Components
import { route } from 'preact-router'
import Reader from './components/reader'
import Loader from './components/loader'

// Utils
import fetchArchive from './lib/fetchArchive.js'
import uncompressWorker from './lib/uncompress.worker.js'

export default class Viewer extends Component {
  constructor(props) {
    super(props)
    this.worker = null
  }

  handleQuery() {
    // Embed API
    const { matches, setCurrentPage, reader } = this.props
    const { file, pg } = matches

    /* Load file */
    file && this.handleUncompress(file)

    /* Set initial page */
    const pageNumber = parseInt(pg, 10)
    pg && pg > 0 && pg != reader.currentPage && setCurrentPage(pageNumber)
  }

  handleUncompress(file) {
    fetchArchive(file, array_buffer => {
      // Build message
      const message = {
        action: 'uncompress_start',
        payload: {
          file_name: 'archive',
          password: null,
          array_buffer,
        },
      }
      // Post message to worker
      this.worker.postMessage(message)
    })
  }

  componentWillMount() {
    const { addPage, setLoadedArchive } = this.props
    // Worker Events
    const actions = {
      ready: data => {
        this.handleQuery()
      },
      error: data => {
        console.error(data.error)
        this.worker.terminate()
      },
    }

    actions.uncompress_each = payload => {
      addPage(payload.file.url)
    }

    actions.uncompress_cover = payload => {
      setLoadedArchive(payload.archive)
      addPage(payload.file.url)
    }

    // Handle messages from worker thread
    const handleMessage = (action, data) => {
      actions[action] && actions[action](data)
    }

    // Create new worker
    this.worker = new uncompressWorker()

    // Listen messages from worker
    this.worker.onmessage = e => {
      const { action, payload } = e.data
      handleMessage(action, payload)
    }
  }

  // Gets called when this route is navigated to
  componentDidMount() {}

  // Gets called just before navigating away from the route
  componentWillUnmount() {}

  // Prevent updates
  componentShouldUpdate() {
    return fasle
  }

  render() {
    const { pages, isLoading } = this.props.reader

    return (
      <div className={`${style.view}`}>
        <div className={style.overlay + ' ' + (isLoading ? '' : style.hide)}>
          <Loader />
        </div>
        {pages.length > 0 && <Reader id={'OSD'} {...this.props} />}
      </div>
    )
  }
}
