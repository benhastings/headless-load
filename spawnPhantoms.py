from subprocess import Popen
import sys
import urllib2
import time

#variables
thrd = int(sys.argv[1])
iter = sys.argv[2]
scriptNm = sys.argv[3]
bseURL = sys.argv[4]

while (thrd > 0):
        Popen('python '+scriptNm+' '+iter+' '+bseURL+' '+str(thrd)+'&',shell=True)
        thrd=thrd-1
