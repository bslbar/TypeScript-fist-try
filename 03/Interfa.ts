/**
 * Created by lb on 10/07/2017.
 */
module Interfa{
    interface SquareFunction{
        (x: number): number;
    }

    interface Person{
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYouger: (years: number)  => void;
        greet: (msg: string)  => string;
    }

    var p: Person = {
        name: 'LB',
        age: 40,
        kids: 1,
        calcPets: function () {
            return this.kid*2;
        },
        makeYouger: function (years: number) {
            this.age -=years;
        },
        greet: function (msg: string) {
            return msg + ', '+this.name+ '/' +this.age;
        }
    }
}