





        var upper = 10000;
        var rnumber = random(upper);
        var guess;
        var attempt = 0;
        
        function random(upper) {
            return Math.floor(Math.random() * upper) + 1;
        }
        
        while (guess !== rnumber) {
            guess = random(upper);
            attempt += 1;
        }
        document.write(attempt + " is computer attempts");