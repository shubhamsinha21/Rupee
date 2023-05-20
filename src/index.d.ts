//specific properties are defined for our currency- hence creating an interface
//typescript are used so that you must have type safety with your script
//defined properties which instructs not to deviate from pre-decided properties
interface Currency{
    name: string;
    value:number;
    flag:string;
    symbol:string;
}