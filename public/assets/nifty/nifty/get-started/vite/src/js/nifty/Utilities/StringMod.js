const StringMod = {
   trim( string){
      return string.replace(/\s/g, "")
   },
   listenerName( string ){
      return `_${string}Handler`
   },
   removeDots( string ){
      return string.replace(/\./g, "")
   }
}

export default StringMod