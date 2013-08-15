import subprocess
import time
import datetime
import csv
import random
import sys


#------------------------------------------------------------
#--- Get Interactive Input for number of loops to execute ---
numLoops = int(sys.argv[1])
baseURL = sys.argv[2]
thread = sys.argv[3]
#--- Read List of PIIs -----------------
PII=[]
csvRd = csv.reader(open('piis3k.csv','rb'))
for j in csvRd:
        PII.append(j)

ct=0
while(ct < numLoops):
        idx=int(random.random()*3100)
        #idx=ct
        #Popen('phantomjs get.js www.sciencedirect.com S0044848600005160+'&',shell=True)
        #Popen('phantomjs get.js '+baseURL+' '+PII[idx]+'&',shell=True)
        out=subprocess.check_output('phantomjs get.js '+baseURL+' '+str(PII[idx]).strip('[\']'),shell=True)
        print(thread+'\t'+out)  
        ct=ct+1
