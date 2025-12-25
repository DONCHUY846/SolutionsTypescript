function puedeEntrar(tieneTarjeta : boolean, claveCorrecta: boolean, esAdmin : boolean): boolean {
return (!!tieneTarjeta && !!claveCorrecta) || !!esAdmin  
}