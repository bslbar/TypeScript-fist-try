/**
 * Created by lb on 10/07/2017.
 */
module Square{
    var squareItSimple = function (
        h: number,
        w: number
    ){
        return h*w;
    };

    var squareItSimple = (h: number, w: number) => h*w;

    var helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log('Hello '+(name || 'unknow person'));
    };

    helloWorld();
    helloWorld("John");
}