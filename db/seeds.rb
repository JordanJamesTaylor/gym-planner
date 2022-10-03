puts "SEEDING DATA"

puts "SEEDING USERS..."

User.create!(first_name: "Jordan", last_name: "Taylor", username: "BFG")

puts "USERS SEEDED"

puts "SEEDING WORKOUTS..."

Workout.create!(name: "Press-Ups", description: "This exercise works the pectoral muscles in your chest and the triceps. These are the muscles in the back of your upper arms. You don't need any equipment to get started with press-ups.  To assist with keeping proper lower back alignment, slim your waistline by trying to pull your belly button in and tightening your abdominal muscles.", muscle_group: "Upper Body and Core", form: "Hips should be in line with the shoulders, and the lower back should have a neutral curve—not completely flat, but not overly curved either.", image: "https://images.medicinenet.com/images/article/main_image/what-are-push-ups-for.jpg", seconds:0, reps:15, sets: 3)

Workout.create!(name: "Squats", description: "This exercise works the glute and inner thigh muscles. As your buttocks become firm, your posture and balance might improve. You don't need any equipment to get started with squats. While squatting Pause when your thighs reach about parallel to the ground. Push through your entire foot to return to start.", muscle_group: "Buttocks, Front and Back Thigh and Groin", form: "Stand with your feet shoulder-width apart, toes slightly out, core braced, and chest up. Initiate a basic squat movement — hips back, knees bent, ensuring they fall out, not in.",  image: "https://i.insider.com/61ae5c2c35814a00195eaf7a?width=1136&format=jpeg", seconds:0, reps:8, sets:5)

Workout.create!(name: "Pull-Ups", description: "This exercise works several muscles of the upper body, including the latissimus dorsi, trapezius, and biceps brachii. A pull-up may be performed with overhand, underhand, neutral, or rotating hand position. The term chin-up is sometimes used to refer to the pull-up performed with supinated grip.", muscle_group: "Lats, Biceps, and Core", form: "Grasp the bar with an overhand grip with your hands just wider than shoulder-width apart. Let your body hang straight down with your arms fully extended. Pull up and squeeze your lats until your chin is over the bar, before lowering slowly to the start position without swinging.", image: "https://image.boxrox.com/2021/05/pull-up.jpg",seconds:0, reps:6, sets:3)

Workout.create!(name: "Lunge", description: "This exercise works the muscles crossing the hip, knee, ankle, and helps improve balance and core stability. A lunge can be done as a bodyweight exercise, with weights, or for plyometric training (jump or reactive training) exercise.", muscle_group: "Glutes, Hamstrings, Calves", form: "Stand with your feet hip-width apart. Step forward and bend both knees, lowering until your knees are bent at a 90-degree angle. Shift forward onto the lead leg. Push off on both legs and step through, lifting your back leg and bringing it forward so your rear foot lands ahead of you in a lunge position.", image: "https://as1.ftcdn.net/v2/jpg/01/68/55/06/1000_F_168550673_q2i5JVo2sTRyBmqaY7OQYlURZ7vomuVS.jpg", seconds:0, reps:15, sets:4)

puts "WORKOUTS SEEDED"

puts "SEEDING QUOTES..."

Quote.create!(text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson")


Quote.create!(text: "Once you learn to quit, it becomes a habit.", author: "Vince Lombardi Jr")

Quote.create!(text: "A year from now you may wish you had started today.", author: "Karen Lamb")

Quote.create!(text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau")

Quote.create!(text: "Our growing softness, our increasing lack of physical fitness, is a menace to our security.", author: "John F. Kennedy")

puts "QUOTES SEEDED"

puts "SEEDING DONE"