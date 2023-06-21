const getRecordTest = async (name) => {
  try {
    const response = await fetch(`http://localhost:3000/api/name?name=${name}`);
    const data = await response.json();
    console.log("!!!", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecordTest;
