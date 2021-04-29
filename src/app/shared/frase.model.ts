// Creating  MY FRASE CLASS, Then i go To MOCK.TS 

export class Frase {

    public fraseEng: string
    public frasePtBr: string


    // public parameters was used to use in another file

    constructor(fraseEng: string, frasePtBr: string) {
        // /constructor/ and /this/ was used to take back those prashe information
        this.fraseEng = fraseEng
        this.frasePtBr = frasePtBr
    }
}