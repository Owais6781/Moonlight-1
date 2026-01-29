export default {
  fetch(request: Request) {
    return new Response(`URL: ${request.url}`);
  },
};
