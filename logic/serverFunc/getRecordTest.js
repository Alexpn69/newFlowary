const getRecordTest = async (name) => {
  try {
    const response = await fetch(
      `https://new-flowary.vercel.app/api/name?name=${name}`

      // `http://localhost:3000/api/name?name=${name}`
    );
    const data = await response.json();
    console.log("!!!", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecordTest;
