import marked from 'marked'

const mdToJs = str => {
  const content = JSON.stringify(marked(str))
  return `export default ${content}`
}
const fileRegex = /\.md$/
export default function md() {
  return {
    transform(raw, id) {
      if(fileRegex.test(id)) {
        return mdToJs(raw)
      }
    },
  }
}