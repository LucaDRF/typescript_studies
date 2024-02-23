class Band {
    protected members: string[] = []; // allow the property to be accessed from his subclasses

    constructor(private name: string, private genre: string) {}

    addMember(name: string) {
        this.members.push(name);
    }
}

class RockBand extends Band {
    private lastGuitar: string;

    constructor(name: string, private guitars: string[]) {
        super(name, 'Rock');
        this.lastGuitar = guitars[guitars.length - 1];
    }

    get rockLeader() {
        return this.members[0];
    }

    get mostRecentGuitar() {
        if (!this.lastGuitar) {
            throw new Error('No guitar found!');
        }

        return this.lastGuitar;
    }

    set mostRecentGuitar(name: string) {
        if (!name) {
            return;
        }

        this.lastGuitar = name;
    }

    addGuitar(name: string) {
        this.guitars.push(name);
    }
}

const pf = new RockBand('Pink floyd', ['Stratocaster', 'Memphis']);

pf.addMember('Syd Barrett');
pf.addMember('Roger Waters');
pf.addMember('Nick Mason');
pf.addMember('Richard Wright');

console.log(pf.rockLeader);
// console.log(pf.members[0]); doesnt exists

console.log(pf.mostRecentGuitar);
pf.mostRecentGuitar = 'Yamaha';
console.log(pf.mostRecentGuitar);
