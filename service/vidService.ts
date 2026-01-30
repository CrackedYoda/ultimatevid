export const checkUrl = async (url: string) => {
  // Use relative path for production compatibility
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  // Check network/server status BEFORE parsing JSON
  if (!res.ok) {
    // Try to parse error message, but fall back to status text if it fails
    let errorMessage = "Failed to check URL";
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      errorMessage = res.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }

  const data = await res.json();
  console.log(data);

  return data;
};

export const getUrl = async (url: string) => {
  if (!url) return;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/download?url=${url}`,
    );
    if (!res.ok) {
      console.log("something went wrong");
    }
   
    
    const data =  await res.json();
    console.log(data.fileName);
    return data.fileName;
  } catch (err) {
    console.log(err);
  }
};
