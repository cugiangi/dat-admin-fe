export class Stato {

    private static VALUES: Stato[] = [];


    public static ATTIVA = new Stato('Attive', 'btn-static-green');
    public static IN_SCADENZA = new Stato('In Scadenza', 'btn-static-orange');
    public static SCADUTE = new Stato('Scadute', 'btn-static-red');


    public name: string;
    public class: string;

    private constructor(name: string, cls: string) {
        this.name = name;
        this.class = cls;

        Stato.VALUES.push(this);
    }

    public static values() {
        return Stato.VALUES;
    }

}