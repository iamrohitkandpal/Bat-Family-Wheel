var panel = document.querySelectorAll(".opt");
var circle = document.querySelector(".circle");
var sbcircle = document.querySelectorAll(".subcircle")
var stripes = document.querySelectorAll(".right");
var h1 = document.querySelectorAll("h1");
var h5 = document.querySelectorAll("h5");
var image = document.querySelector(".main img");

var subcircle = 4;

gsap.to(".circle", {
    rotate: "0deg",
    ease: Expo.easeInOut,
    duration: 2
});

gsap.to(panel[subcircle - 1], {
    opacity: 0.8,
});

gsap.to(stripes[3], {
    opacity: 0.8
});

gsap.to(stripes[3].querySelector('h1'), {
    fontSize: '3vw',
    ease: Expo.easeInOut,
    duration: 1
});
gsap.to(stripes[3].querySelector('h5'), {
    fontSize: '1vw',
    ease: Expo.easeInOut,
    duration: 1
});

gsap.to(panel, {
    backgroundColor: "#AA1710",
    ease: Expo.easeInOut,
    duration: 1
});
gsap.to(stripes, {
    color: "#AA1710",
    ease: Expo.easeInOut,
    duration: 1
});
gsap.to(circle, {
    borderColor: "#AA1710",
    ease: Expo.easeInOut,
    duration: 1
});
gsap.to(sbcircle, {
    backgroundColor: "#AA1710",
    ease: Expo.easeInOut,
    duration: 1
});

function touch() {
    panel.forEach((sbcrl, index) => {
        sbcrl.addEventListener("click", () => {
            fader(index);
            if (index == 0) {
                image.src = "/Veer.jpg";
                gsap.to(panel, {
                    backgroundColor: "#ea8900",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "#ea8900",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "#ea8900",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "#ea8900",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 1) {
                image.src = "/Mahesh.jpg";
                gsap.to(panel, {
                    backgroundColor: "#fff",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "#fff",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "#fff",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "#fff",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 2) {
                image.src = "/Prem Bhai.jpg";
                gsap.to(panel, {
                    backgroundColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 3) {
                image.src = "/Batman.jpg";
                gsap.to(panel, {
                    backgroundColor: "#AA1710",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "#AA1710",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "#AA1710",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "#AA1710",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 4) {
                image.src = "/Daadi.jpg";
                gsap.to(panel, {
                    backgroundColor: "#D9B89C",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "#D9B89C",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "#D9B89C",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "#D9B89C",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 5) {
                image.src = "/Chiya.jpg";
                gsap.to(panel, {
                    backgroundColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "rgb(219, 203, 20)",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            if (index == 6) {
                image.src = "/Bittu.jpg";
                gsap.to(panel, {
                    backgroundColor: "#5DC8FF",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(stripes, {
                    color: "#5DC8FF",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(circle, {
                    borderColor: "#5DC8FF",
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(sbcircle, {
                    backgroundColor: "#5DC8FF",
                    ease: Expo.easeInOut,
                    duration: 1
                });
            }
            gsap.from(image, {
                width:0,
                height:0,
                ease: Expo.easeInOut,
                duration: 1
            })
            gsap.to(circle, {
                rotate: (4 - (index + 1)) * 12,
                ease: Expo.easeInOut,
                duration: 1
            });
            gsap.to(stripes[index], {
                opacity: 0.9,
                ease: Expo.easeInOut,
                duration: 1
            });
            gsap.to(panel[index], {
                opacity: 0.9,
                ease: Expo.easeInOut,
                duration: 1
            });
            gsap.to(stripes[index].querySelector('h1'), {
                fontSize: '3.25vw',
                ease: Expo.easeInOut,
                duration: 1
            });
            gsap.to(stripes[index].querySelector('h5'), {
                fontSize: '1vw',
                ease: Expo.easeInOut,
                duration: 1
            });
        });
    });
}

function fader(index) {
    panel.forEach((p, i) => {
        if (i !== index) {
            gsap.to(p, {
                opacity: 0.2
            });
        }
    });
    stripes.forEach((s, i) => {
        if (i !== index) {
            gsap.to(s, {
                opacity: 0.3
            });
        }
    });
    h1.forEach((heading, i) => {
        gsap.to(heading, {
            fontSize: i === index ? '3.25vw' : '1.9vw',
            ease: Expo.easeInOut,
            duration: 0.5
        });
    });
    h5.forEach((subheading, i) => {
        gsap.to(subheading, {
            fontSize: i === index ? '1vw' : '0.8vw',
            ease: Expo.easeInOut,
            duration: 0.5
        });
    });
}

touch();
