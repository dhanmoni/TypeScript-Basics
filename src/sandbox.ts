type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} with uid ${user.uid} says hello `);
};

const logDetails = (item: string, uid: string | number) => {
  console.log(`${item} has uid of ${uid}`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} with uid ${user.uid} says hello `);
};

const logDetailsAgain = (item: string, uid: StringOrNum) => {
  console.log(`${item} has uid of ${uid}`);
};
