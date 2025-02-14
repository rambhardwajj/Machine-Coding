if( !Object.myAssign){
    Object.assign = function(target, ...sources){
        if(target == null) throw new TypeError("target cannot be null as we cannot convert null/undefined to an object. Pass {} as target in the calling function.")
        
        let res = Object(target);
        for( let source of sources){
            if( source != null){
                // In the object there can be keys / Symbols / Inherited properties
                // Object.assign only copies the keys and symbols and not inherited properties.
                for(let key  of Object.keys(source) ){
                    res[key] = source[key];
                }
                for(let symbol of Object.getOwnPropertySymbols(sources)){
                    res[symbol] = source[symbol];
                }
            }
        }
        return res;
    }
}

const obj1 = { a: 1 };
const obj2 = { b: 2, [Symbol('c')]: 3 };
const obj3 = Object.create({ inherited: 4 }, { d: { value: 5, enumerable: true } });

// { a: 1, b: 2, d: 5, [Symbol(c)]: 3 }
console.log(Object.myAssign({}, obj1, obj2, obj3)); 