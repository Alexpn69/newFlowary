export function sumValuesByKey(arr, key) {
  return arr.reduce((sum, obj) => sum + Number(obj[key]), 0);
}

export const substrAddress = (who) => {
  const truncatedWho = `${who.substr(0, 5)}...${who.substr(-4)}`;

  const copyToClipboard = (event) => {
    navigator.clipboard.writeText(who);

    const notification = document.createElement("div");
    notification.textContent = "Copied!";
    notification.style.position = "absolute";
    notification.style.top = `${event.clientY}px`;
    notification.style.left = `${event.clientX}px`;
    notification.style.padding = "10px";
    notification.style.background = "#1c305a";
    notification.style.color = "white";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 2000);
  };

  return (
    <div
      onClick={(event) => copyToClipboard(event)}
      style={{ cursor: "pointer" }}
    >
      {truncatedWho}
    </div>
  );
};
