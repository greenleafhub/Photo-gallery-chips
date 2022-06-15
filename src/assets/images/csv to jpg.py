# code from https://gist.github.com/davidbauer/11055010

import urllib.request

filename = "images"

# open file to read
with open("{0}.csv".format(filename), 'r') as csvfile:
    # iterate on all lines
    i = 0
    for line in csvfile:
        splitted_line = line.split(',')
        urllib.request.urlretrieve(splitted_line[1], splitted_line[0] + ".png")
        i += 1
        print("photo",  splitted_line[0], "downloaded")
