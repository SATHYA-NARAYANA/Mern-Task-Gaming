FROM centos:latest
RUN yum install sudo -y && \
RUN yum install httpd -y && \
RUN yum install git -y && \
mkdir  /img &&  \
3. Creating User with movement
4. Add collission detection 
5. Swaping images with boundries 
6. Pellets has been added 
7. Removed pellets on collission with hypot 
8. Added Score 
7. Added Ghost
9. Set constraints for ghost
10. Added more ghosts
11. Powerups advantage to player done
12. Pacman Face created 
13. Finish with Gamming 
ENTRYPOINT flask  run --host=0.0.0.0    --port=4444
