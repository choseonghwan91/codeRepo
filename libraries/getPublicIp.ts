export const getPublicIp = async () => {
  try {
    let publicIp = await getPublicIpFromIpify();
    if (!publicIp) {
      publicIp = await getPublicIpFromGeoLocation();
    }
    return publicIp;
  } catch (err) {
    console.log("퍼블릭 IP 수신 중 에러가 발생했습니다.");
    console.error(err);
  }

  async function getPublicIpFromIpify() {
    try {
      const res = fetch("https://api.ipify.org").then((res) => res.text());
      return res;
    } catch (error) {
      return false;
    }
  }

  async function getPublicIpFromGeoLocation() {
    try {
      const res = fetch("https://geolocation-db.com/json/")
        .then((res) => res.json())
        .then((res) => res.IPv4);
      return res;
    } catch (error) {
      throw "ipify, geolocation 모두 에러 발생";
    }
  }
};
