import type { Compiler } from 'webpack'
import { URLSearchParams } from 'url'
// import path from 'path'
// import {loader} from './loader'
// console.log('require.resolve', require.resolve('./loader'));

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

export class FesDesignPlugin {
    apply(compiler: Compiler) {
        compiler.options.module.rules.unshift({
            resourceQuery: (query) => {
                if(!query) return false
                // console.log(query);
                const qs = new URLSearchParams(query)
                // 支持jsx引入
                return qs.has('vue') && (
                  qs.get('type') === 'template' ||
                  (qs.get('type') === 'script' && !qs.has('setup'))
                )
            },
            use: {
                loader: require.resolve('./loader')
            }
        })
        
    }
}