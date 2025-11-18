function status(request, response) {
  const appName = "Tramita+";
  const version = "1.0.0";
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    app_name: appName,
    version: version,
    updated_at: updatedAt,
  });
}

export default status;
