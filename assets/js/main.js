btnStart.addEventListener("click", () => {
    alert("Bir ormanın derinliklerinde uyandın. Önünde iki yol var:");

    let choice1 = prompt("1. Sağdaki dar patika \n2. Soldaki gölgeli yol \nSeçimini yap (1 veya 2):");
    while (choice1 !== "1" && choice1 !== "2") {
        choice1 = prompt("geçersiz seçim 1 veya 2 yaz: \n1. Sağdaki dar patika \n2. Soldaki gölgeli yol");
    }

    if (choice1 === "1") {
        let choice2 = prompt("Vadiye ulaştın ve yaşlı bir bilgeyle karşılaştın. Sana iki seçenek sunuyor:\na. Kitap\nb. Anahtar\nSeçimini yap (a veya b):");
        while (choice2.toLowerCase() !== "a" && choice2.toLowerCase() !== "b") {
            choice2 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Kitap\nb. Anahtar");
        }

        if (choice2.toLowerCase() === "a") {
            let choice3 = prompt("Bilge sana iki sır öneriyor:\na. Geleceği öğren\nb. Geçmiş sırları öğren\nSeçimini yap (a veya b):");
            while (choice3.toLowerCase() !== "a" && choice3.toLowerCase() !== "b") {
                choice3 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Geleceği öğren\nb. Geçmiş sırları öğren");
            }

            if (choice3.toLowerCase() === "a") {
                alert("Geleceği öğrendin ve bir bilgeye dönüştün. Kazandın!");
            } else if (choice3.toLowerCase() === "b") {
                alert("Geçmişteki sırlar seni büyüledi ama kayboldun. Oyun bitti.");
            }
        } else if (choice2.toLowerCase() === "b") {
            let choice3 = prompt("Anahtar seni bir tapınağa götürdü. İki kapı var:\na. Işık dünyası\nb. Karanlık dünya\nSeçimini yap (a veya b):");
            while (choice3.toLowerCase() !== "a" && choice3.toLowerCase() !== "b") {
                choice3 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Işık dünyası\nb. Karanlık dünya");
            }

            if (choice3.toLowerCase() === "a") {
                alert("Işık dünyasında barış buldun. Kazandın!");
            } else if (choice3.toLowerCase() === "b") {
                alert("Karanlık dünyada güç kazandın ama yalnızlaştın. Oyun bitti.");
            }
        }

    } else if (choice1 === "2") {
        let choice2 = prompt("Karanlık mağaraya girdin. İki yol var:\na. Sağdan git\nb. Soldan git\nSeçimini yap (a veya b):");
        while (choice2.toLowerCase() !== "a" && choice2.toLowerCase() !== "b") {
            choice2 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Sağdan git\nb. Soldan git");
        }

        if (choice2.toLowerCase() === "a") {
            let choice3 = prompt("Bir hazine odasına ulaştın. İki seçenek var:\na. Hazineyi al\nb. Bir kısmını bırak\nSeçimini yap (a veya b):");
            while (choice3.toLowerCase() !== "a" && choice3.toLowerCase() !== "b") {
                choice3 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Hazineyi al\nb. Bir kısmını bırak");
            }

            if (choice3.toLowerCase() === "a") {
                alert("Hazineyi aldın ama lanetlendin. Oyun bitti.");
            } else if (choice3.toLowerCase() === "b") {
                alert("Hazineyle güvenle çıktın. Kazandın!");
            }
        } else if (choice2.toLowerCase() === "b") {
            let choice3 = prompt("Bir ejderhayla karşılaştın. İki seçenek var:\na. Dövüş\nb. Anlaşma yap\nSeçimini yap (a veya b):");
            while (choice3.toLowerCase() !== "a" && choice3.toLowerCase() !== "b") {
                choice3 = prompt("geçersiz seçim! yalnızca a veya b yaz:\na. Dövüş\nb. Anlaşma yap");
            }

            if (choice3.toLowerCase() === "a") {
                alert("Ejderhayı yendin ve kahraman oldun. Kazandın!");
            } else if (choice3.toLowerCase() === "b") {
                alert("Ejderhayla anlaştın ve güvenle ayrıldın. Kazandın!");
            }
        }
    }
})