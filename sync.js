const APPS_SCRIPT_URL = https://script.google.com/macros/s/AKfycbxEAzystSYNiJYP9se4ZVgpSLwIofSP4mYIwFXmDNxt1BQcua1wWeg8v-la14qpd67Q/exec;

async function sinkronDataKeCloud(dataHasil) {
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataHasil)
    });
    return { ok: true };
  } catch (error) {
    console.error('Gagal sinkron:', error);
    return { ok: false, error };
  }
}
