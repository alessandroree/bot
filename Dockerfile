FROM node
VOLUME /discordbot
WORKDIR /discordbot
CMD ["node", "./src/index.js"]