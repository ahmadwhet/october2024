import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const date = moment().format();

const makeCommits = (n) => {
    if(n===0) return simpleGit();
    const x = random.default.int(0, 54);
    const y = random.default.int(0, 6);
    const date = moment().subtract(1, "y").add(1, "d").add(x, "w").add(y, "d").format();


const data = {
    date: date,
};

console.log(date);
jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date,{'--date':date},makeCommits.bind(this,--n));
});
};

makeCommits(100);