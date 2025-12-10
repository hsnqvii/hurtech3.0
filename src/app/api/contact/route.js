export async function POST(req) {
  try {
    const formData = await req.json();

    // Google Apps Script URL
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbydBRmBmjMgI8Q1GgO0-_fwc22qjeWD7Mba9D-i9JP8ioE3XgMLAB02VdlZhP4SShWZYQ/exec";

    // Forward the data to Google Sheets
    const res = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return new Response(JSON.stringify({ status: "success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ status: "error", error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
