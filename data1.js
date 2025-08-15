export default function handler(req, res) {
  res.status(200).json({
    line1: "Hello from my Cloud API",
    line2: "This is line 2",
    line3: "This is line 3"
  });
}
