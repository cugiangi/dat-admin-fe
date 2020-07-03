import { Pubblicita } from './pubblicita.model';
import { Stato } from './stato.model';

export class Totem {
    name: string;
    pubblicita: Map<Stato, Pubblicita[]>;

    constructor(name: string, pubbl: Pubblicita[]) {
        this.name = name;
        this.pubblicita = new Map();
        if (pubbl) {
            for (let p of pubbl) {
                let stato: Stato = this.randomEnum();
                if (this.pubblicita.get(stato)) {
                    this.pubblicita.get(stato).push(p);
                } else {
                    let arr = [];
                    arr.push(p);
                    this.pubblicita.set(stato, arr);
                }
            }
        }
    }

    randomEnum(): Stato {
        const enumValues = Stato.values();
        const randomIndex = Math.floor(Math.random() * enumValues.length)
        const randomEnumValue = enumValues[randomIndex]
        return randomEnumValue;
    }
}