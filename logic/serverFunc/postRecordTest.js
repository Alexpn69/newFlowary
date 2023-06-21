const postRecordTest = async (name, address) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ name, address }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `http://localhost:3000/api/data`,

      requestOptions
    );
  } catch (error) {
    console.log(error.message);
  }
};
export default postRecordTest;
