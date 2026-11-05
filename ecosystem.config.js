module.exports = {
  apps: [
    {
      name: "ui8-lawyer",
      cwd: "/var/www/ui8/james-carter-lawyer",
      script: "node_modules/next/dist/bin/next",
      args: ["start", "-p", "3023"],
      max_memory_restart: "512M",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: "3023",
      },
    },
  ],
};
