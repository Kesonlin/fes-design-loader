
interface ComponentType {
    name?: string
    index: number
    length: number
    symbol?: string
}

const getImports = (components: ComponentType[]) => {
    let code = ''
    components.forEach(c => {
        code += `import { ${c.name} as ${c.symbol} } from '@fesjs/fes-design' \n`
    })
    return code
}

export default function(content: string) {
    const result = content.matchAll(/(?:var|const) (\w+) = _resolveComponent\("([\w-.]+)"\);?/gm)
    const components: ComponentType[] = Array.from(result).map(v => ({
        name: v[2],
        index: v.index || 0,
        length: v[0].length,
        symbol: v[1]
    })).filter(v => v.name.startsWith('F'))
    if(!components || !components.length) return content
    const source = [...components].reduce((pre, cur) => {
        return pre.slice(0, cur.index) + ' '.repeat(cur.length) + pre.slice(cur.index + cur.length)
    }, content)
    const imports = getImports(components)
    return imports + source
}