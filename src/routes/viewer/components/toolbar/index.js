import { h, Component } from 'preact'
import Icon from '../../../../components/icon'
import style from './style'

// Test

class PageNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      isFirstPage: true,
      isLastPage: false,
      totalPages: this.props.totalPages,
    }
  }

  nextPage() {
    const { onPageChange } = this.props
    this.setState(prevState => {
      const { currentPage, totalPages } = prevState
      const nextPage = currentPage + 1
      if (nextPage < prevState.totalPages) {
        onPageChange(nextPage)
        // Go to next page
        return { isFirstPage: false, currentPage: nextPage }
      } else {
        // Go to last page
        return { isLastPage: true, currentPage: totalPages }
      }
    })
  }

  previousPage() {
    const { onPageChange } = this.props
    this.setState(prevState => {
      const prevPage = prevState.currentPage - 1
      if (prevPage > 1) {
        onPageChange(prevPage)
        // Go to previous page
        return { isFirstPage: false, isLastPage: false, currentPage: prevPage }
      } else {
        onPageChange(1)
        // Go to First page (Book cover)
        return { isFirstPage: true, currentPage: 1 }
      }
    })
  }

  render() {
    const { currentPage, isFirstPage, isLastPage, totalPages } = this.state
    return (
      <div className={style.nav}>
        <div
          className={style.item}
          onClick={this.previousPage.bind(this)}
          disabled={isFirstPage}
        >
          <Icon name={'angle-left'} />
        </div>
        <div className={style.item}>
          <div className={style.label}>
            {currentPage} <span> / {totalPages}</span>
          </div>
        </div>
        <div
          className={style.item}
          onClick={this.nextPage.bind(this)}
          disabled={isLastPage}
        >
          <Icon name={'angle-right'} />
        </div>
      </div>
    )
  }
}

class ViewerMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookMode: false,
    }
  }

  toggleMode() {
    const { onToggle } = this.props
    this.setState(prevState => {
      const { bookMode } = prevState
      const toggleMode = !bookMode
      onToggle && onToggle(toggleMode)
      return { bookMode: toggleMode }
    })
  }

  render() {
    const { bookMode } = this.state
    return (
      <div className={style.item} onClick={this.toggleMode.bind(this)}>
        <Icon name={bookMode ? 'columns' : 'file'} />
      </div>
    )
  }
}

export default class Toolbar extends Component {
  constructor(props) {
    super(props)
  }

  // gets called when this route is navigated to
  componentDidMount() {}

  // gets called just before navigating away from the route
  componentWillUnmount() {}

  render() {
    const { onPageChange, totalPages, onBookMode } = this.props
    return (
      <div className={style.toolbar}>
        <PageNav totalPages={totalPages} onPageChange={onPageChange} />
        <ViewerMode onToggle={onBookMode} />
      </div>
    )
  }
}
