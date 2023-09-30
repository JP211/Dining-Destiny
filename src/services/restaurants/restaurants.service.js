import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant => {
        return {
            ...restaurant,
            isClosedTemporarily:
        };
    }));
    console.log(mappedResults);

  const newResult = camelize(result.results.length);
  return newResult;
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });
