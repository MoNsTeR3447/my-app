import { AntDesign, EvilIcons, Ionicons, MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

function ProfileScreen() {
    return <><View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "500" }}>Account</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, gap: 8 }}>

            <View style={{ height: 80, width: 80, borderRadius: 100 }}>
          <Image
            source={require("../assets/test.png")} // Path to the image
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              alignSelf: "center",
            }} // Customize the size as needed
          />
        </View>
        
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>Virat Kholi</Text>
                <Text style={{ fontSize: 14 }}>Viratjitayegarcbko@gmail.com</Text>
            </View>
            <View style={{ borderRadius: 110, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
                <Pressable>
                    <EvilIcons name="pencil" size={28} color="black" />
                </Pressable>
            </View>
        </View>

        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />

        <View style={{ paddingVertical: 16, gap: 24 }}>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="qr-code-outline" size={30} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Scan Code</Text>
                </View>
            </View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="settings" size={30} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Splitwise Premium</Text>
                </View>
            </View>
        </View>

        <View style={{ paddingVertical: 1, gap: 24 }}></View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Entypo name="help" size={30} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Help and Support</Text>
                </View>
            </View>

        <View style={{ paddingVertical: 8, gap: 20 }}></View>
        <Text style={{ fontSize: 24, fontWeight: "500", color: "red" }}>Preferences</Text>

        <View style={{ paddingVertical: 8, gap: 20 }}></View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="notifications" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Notification Settings</Text>
                </View>
            </View>

        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <MaterialCommunityIcons name="security" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Security</Text>
                </View>
            </View>
        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <MaterialCommunityIcons name="gmail" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>E-mail Settings</Text>
                </View>
            </View>

        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Entypo name="language" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Change Language</Text>
                </View>
            </View>
        </View>

        <View style={{ paddingVertical: 10, gap: 24 }}></View>
        <Text style={{ paddingLeft: 15, fontSize: 24, fontWeight: "500", color: "green" }}>Feedback</Text>
        
        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ paddingLeft: 15, gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <AntDesign name="staro" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Rate the Application</Text>
                </View>
            </View>
        
        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ paddingLeft: 15, gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <MaterialIcons name="support-agent" size={24} color="black" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>Contact Us</Text>
                </View>
            </View>

        <View style={{ paddingVertical: 10, gap: 24 }}></View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray' }} />    

        <View style={{ paddingVertical: 10, gap: 24 }}></View>
            <View style={{ paddingLeft: 15, gap: 12, flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    <Ionicons name="exit-outline" size={35} color="red" />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'red', fontSize: 25 }}>LOG OUT</Text>
                </View>
            </View>

    </> 
}

export default ProfileScreen;