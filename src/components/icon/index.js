import style from './style'

console.log(style.icon)
const Icon = ({ name }) => <i class={`fas fa-${name} fa-fw ${style.icon}`} />

export default Icon
