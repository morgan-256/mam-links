FROM caddy:latest
LABEL Name=mamlinks Version=0.0.1
COPY Caddyfile /etc/caddy/Caddyfile
COPY build /srv

