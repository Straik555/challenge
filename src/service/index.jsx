export default class PersonstoreService {
    data = [
        {
            id: 1,
            name: 'Chad Snyder',
            age: 28,
            animal: 'owl',
            phone: '8 (629) 653-9041',
            phrase: 'Owmeco jen be tezpoksim vojuz parro vuri da ce wioveis ko hojmaso ahe civ bapdedam.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/owl.svg'
        },
        {
            id: 2,
            name: 'Milton Warner',
            age: 65,
            animal: 'owl',
            phone: '8 (366) 958-8850',
            phrase: 'Juile ejtaglo olzam fifi pirviju pawisu du dorkuwfo pu fefmelfer sunozod hovitado lalis idrefzec mudic.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/owl.svg'
        },
        {
            id: 3,
            name: 'Viola Hale',
            age: 43,
            animal: 'cat',
            phone: '8 (687) 456-4873',
            phrase: 'Vahkeega vi hut fa dabigaj areepjat seci jem couci dovigo ecoozahi ba duzboh fiduf mebfi.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/cat.svg'
        },
        {
            id: 4,
            name: 'Tyler Herrera',
            age: 48,
            animal: 'dog',
            phone: '8 (537) 867-1647',
            phrase: 'Ewetovuv gebuw kaaniosu vizuk upe hafe aguhuh agevamu dom humo ciasa gairji ufvisso je poz.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/dog.svg'
        },
        {
            id: 5,
            name: 'Gabriel Howell',
            age: 18,
            animal: 'penguin',
            phone: '8 (629) 653-9041',
            phrase: 'Bofojce mep bine cizavher eze aneeke puvaon ug cupfovcu ne kuzak lod mu kehozwu zovlam.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/penguin.svg'
        },
        {
            id: 6,
            name: 'Maurice Watson',
            age: 58,
            animal: 'lion',
            phone: '8 (219) 734-5286',
            phrase: 'Emafecew beframfop has litfu gomcabire ku mo go te ligodo rod bowina kodnib oz juciuc.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/lion.svg'
        },
        {
            id: 7,
            name: 'Vincent Sparks',
            age: 38,
            animal: 'fox',
            phone: '8 (475) 497-4172',
            phrase: 'Kuz dukieri javavavip resveb ovowibco vi diwasweh sownis hongep orulawuc baz kej muwrem eciur rob.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/fox.svg'
        },
        {
            id: 8,
            name: 'Adelaide Jacobs',
            age: 88,
            animal: 'sheep',
            phone: '8 (609) 383-7022',
            phrase: 'Ogebu mihset gazile gekzef karvutew nez tuv sahomjo upe ez emujot dip giv gapef nir.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/sheep.svg'
        },
        {
            id: 9,
            name: 'Phillip Daniels',
            age: 19,
            animal: 'koala',
            phone: '8 (629) 653-9041',
            phrase: 'Ic dulo coc ezijaav nu cok banih goadiofa doc capunur vin gi gezuwlal tifwepkuf bajsauk.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/koala.svg'
        },
        {
            id: 10,
            name: 'Leila Smith',
            age: 41,
            animal: 'raccoon',
            phone: '8 (629) 653-9041',
            phrase: 'Relcefja nineaz suh usi fabnak mam duhir ve misoddo rikatvo giubomo nag mo pocvelok wivtimnud.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/raccoon.svg'
        },
        {
            id: 11,
            name: 'Phillip Barker',
            age: 64,
            animal: 'pig',
            phone: '8 (629) 653-9041',
            phrase: 'Ittap idi jathaju tusmof za tugte vudiz zinino egoab zak ta pughored faboz radhajhiz po.',
            image: 'http://rtivital.github.io/react-challenge-sort-and-search/images/pig.svg'
        }
    ];
    getPerson(){
        return new Promise((resolve, reject) => {          
            setTimeout(() => {
                //  if(Math.random() > 0.75){
                //     reject(new Error('Something bad happened'))
                // } else { 
                //     resolve(this.data);
                // }
                resolve(this.data)
            }, 700)
        })
    }
}