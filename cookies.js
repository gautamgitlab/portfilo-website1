<script>
  // Set a cookie
  document.cookie = "visited=true; expires=Fri, 31 May 2025 12:00:00 UTC; path=/";

  // Check if user has already visited
  if (document.cookie.indexOf('visited=true') !== -1) {
    console.log("Welcome back, Gautam Pal!");
  } else {
    console.log("Welcome to Gautam Pal's Portfolio for the first time!");
  }
</script>
