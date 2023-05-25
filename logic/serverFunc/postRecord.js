const postRecord = async (name, address) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ name, address }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(
      `https://sea-lion-app-op3tn.ondigitalocean.app/`,
      requestOptions
    );
    await response.json();
  } catch (error) {
    console.log(error);
  }
};
export default postRecord;
