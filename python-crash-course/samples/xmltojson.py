import xmltodict
import json


def main():
    ### read in data from file (XML) or via URL
    my_data = open("test.xml", "r")
    my_dict = {}
    if my_data.mode == "r":
        contents = my_data.read()
        print(contents)
        my_dict = xmltodict.parse(contents)
        my_data.close()
    ### parse this into a Dict object

    print("OrderDict...")
    print(my_dict)

    ### convert into a JSON object and output to file
    print("JSON Object")
    print(json.dumps(my_dict))
    my_json = json.dumps(my_dict)

    json_output = open("test.json", "w+")
    if json_output.mode == "w+":
        json_output.write(str(my_json))

    json_output.close()

    print("Job Complete.")


if __name__ == "__main__":
    main()

