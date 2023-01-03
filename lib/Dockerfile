FROM quay.io/aswinsabu1267/aswinmd
RUN git clone https://github.com/Sparkymon777/ASWIN-MD /root/SamPandey001
WORKDIR /root/SamPandey001/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
