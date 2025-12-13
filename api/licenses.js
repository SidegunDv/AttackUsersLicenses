export default async function handler(req, res) {
  const gh = await fetch(
    "https://api.github.com/repos/SidegunDv/AttackUsersLicenses/contents/index.html",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw"
      }
    }
  );

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).send(await gh.text());
}
