FROM node:alpine3.17

COPY package.json package-lock.json ./
COPY . .
RUN npm install
#RUN npx sequelize-cli db:migrate
ENV HOST=0.0.0.0
ENV PORT=8098
EXPOSE 8098

CMD ["npm", "run", "start"]