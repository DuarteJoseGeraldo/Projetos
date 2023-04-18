const exp = require("constants");
const { on } = require("events");
const { type } = require("os");
const internal = require("stream");
const desafio = require("./desafio");

// describe("", ()=>{
//   it("",()=>{
//   })
// })

describe("doubleANumber", () => {
  it("should return twice the positive number received", () => {
    const params = 3;
    const result = desafio.doubleANumber(params);
    expect(typeof params).toBe("number");
    expect(typeof result).toBe("number");
    expect(result).toBe(params * 2);
  });
  it("should return twice the negative number received", () => {
    const params = -2;
    const result = desafio.doubleANumber(params);
    expect(typeof params).toBe("number");
    expect(typeof result).toBe("number");
    expect(result).toBe(-4);
  });
});

describe("createFullName", () => {
  it("should return a string containing the full name", () => {
    const params = ["Jose", "Duarte"];
    const result = desafio.createFullName(...params);
    expect(typeof params[0] && typeof params[1]).toBe("string");
    expect(result.split.length).toBe(2);
    // expect(result).toMatch(params[0], params[1]);
    expect(result.split(" ")[0]).toBe(params[0]);
  });
});

describe("calculateTheLengthOfAString2", () => {
  it("should return the length of the string received", () => {
    const params = "O salario cai dia 5";
    const result = desafio.calculateTheLengthOfAString2(params);
    expect(typeof params).toBe("string");
    expect(typeof result).toBe("number");
    expect(result).toBe(params.length);
  });
});

describe("numbersArrayIntoString", () => {
  it("should return a string where every 3 numbers a dot is placed before the next number", () => {
    const params = [1, 2, 3, 4, 5, 6, 7, 8];
    const onlyNumbers = () => {
      return params.every((elem) => typeof elem === "number"); //every verifica se todos os elemntos condizem coma acondição determinada
    };
    const result = desafio.numbersArrayIntoString(params);
    expect(onlyNumbers()).toBe(true);
    expect(typeof result).toBe("string");
    expect(result.includes(".")).toBe(true);
  });
  it("should return a string whithout dots if array length is ", () => {
    const params = [1, 2];
    const onlyNumbers = () => {
      return params.every((elem) => typeof elem === "number"); //every verifica se todos os elemntos condizem coma acondição determinada
    };
    const result = desafio.numbersArrayIntoString(params);
    expect(onlyNumbers()).toBe(true);
    expect(typeof result).toBe("string");
    expect(result.includes(".")).toBe(false);
  });

  it("should return a empty string if array is empty", () => {
    const params = [];
    const onlyNumbers = () => {
      return params.every((elem) => typeof elem === "number");
    };
    const result = desafio.numbersArrayIntoString(params);
    expect(onlyNumbers()).toBe(true);
    expect(typeof result).toBe("string");
    expect(result).toBe("");
  });
});

describe("addNewLanguage", () => {
  it("should return the object eith a new language added in the languages array", () => {
    const params = [
      {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes:
          "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
      },
      "Java",
    ];
    const result = desafio.addNewLanguage(...params);
    expect(typeof params[0]).toBe("object");
    expect(typeof params[1]).toBe("string");
    expect(typeof result).toBe("object");
    expect(result.languages.includes(params[1])).toBe(true);
  });
  it("the languages array recevied a new language", () => {
    const params = [
      {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes:
          "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
      },
      "Java",
    ];
    const oldLength = params[0].languages.length;
    const result = desafio.addNewLanguage(...params);
    expect(typeof params[0]).toBe("object");
    expect(typeof params[1]).toBe("string");
    expect(typeof result).toBe("object");
    expect(result.languages.length).toBe(oldLength + 1);
  });
});

describe("votersResult", () => {
  const params = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  it("should return the different types of voters and the number of each of them in a object", () => {
    const result = desafio.votersResult(params);

    expect(typeof params).toBe("object");
    expect(typeof result).toBe("object");
    expect(result).toMatchObject({
      numYoungVotes: 1,
      numYoungPeople: 4,
      numMidVotesPeople: 3,
      numMidsPeople: 4,
      numOldVotesPeople: 3,
      numOldsPeople: 4,
    });
  });

  it("The array of objects passed as a parameter should contain objects with the properties of a voter. ", () => {
    const voterData = ["name", "age", "voted"];
    const result = desafio.votersResult(params);

    const verifyParam = () =>
      params.every((curr) => Object.keys(curr).includes(...voterData));
    expect(typeof params).toBe("object");
    expect(typeof result).toBe("object");
    expect(verifyParam()).toBe(true);
  });
});
