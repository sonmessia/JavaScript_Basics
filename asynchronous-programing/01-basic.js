function fetchData(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve("Here is your data");
    }, 1000);
  });
}


async function getData() {
    try {
        const data = await fetchData();
        console.log("Data received: ", data);
    } catch (error) {
        console.log("Error: ", error);
    }
};

getData();


