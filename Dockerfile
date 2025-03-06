FROM nodejs:13
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["run","start"]