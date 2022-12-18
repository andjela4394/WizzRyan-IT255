export class Flight {
    polazak: string;
    dolazak: string;
    vremePoletanja: string;

    constructor(polazak: string, dolazak: string, vremePoletanja: string) {
        this.polazak = polazak;
        this.dolazak = dolazak;
        this.vremePoletanja = vremePoletanja;
    }
}