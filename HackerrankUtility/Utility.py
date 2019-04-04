'''
Title     : Utility
Details   : Utility class for Hackerrank 10-days-of-javascript tutorials
Author    : Ahmedur Rahman Shovon
Created   : 3 April 2019
'''
import datetime
import json
import os
import re
import sys
import shutil


class Utility(object):
    def __init__(self):
        self.domain = 'Tutorials'
        self.author = 'Ahmedur Rahman Shovon'
        self.author_short = 'arsho'
        self.created_date = datetime.datetime.today().strftime("%d %B %Y")
        self.problem_list_file_name = 'problem_list.json'
        self.solution_root = '../solutions'
        self.languages = {"javascript": ".js"}

    def get_valid_name(self, original_name):
        # Replace non alphanumeric character
        updated = re.sub(r'[^\w]', '', original_name)
        # Insert an underscore after DayXX. E.g. Day112DArrays-> Day11_2DArrays
        updated = re.sub(r"(^Day[0-9]{1,2})(.*)", r"\1_\2", updated)
        return updated

    def get_solution_file(self, title, extension):
        # return solution path: prefix_author.extension
        return "{}{}".format(title, extension)

    def get_file_header(self, title, language='python'):
        header_comment_starting_tag = '/*\n'
        header_comment_ending_tag = '*/\n'
        header = ''
        header += header_comment_starting_tag
        header += '  Title     : '+title+'\n'
        header += '  Domain    : '+self.domain+'\n'
        header += '  Author    : '+self.author+'\n'
        header += '  Created   : '+self.created_date+'\n'
        header += header_comment_ending_tag
        return header

    def remove_existing_directory(self, directory_path):
        print("{} directory already exist.".format(directory_path))
        user_choice = input("Do you want to override? ('y'/'n'): ")
        if user_choice.strip().lower() != 'y':
            return False
        shutil.rmtree(directory_path)
        return True

    def create_blank_solution_files(self):
        if os.path.exists(self.solution_root):
            remove_root = self.remove_existing_directory(self.solution_root)
            if remove_root == False:
                return None
        data = []
        with open(self.problem_list_file_name, "r") as problem_list_file:
            problems = json.load(problem_list_file)
            for title in problems:
                clean_title = self.get_valid_name(title)
                folder = os.path.join(self.solution_root+os.sep, clean_title)
                if os.path.exists(folder):
                    remove_root = self.remove_existing_directory(folder)
                    if remove_root == False:
                        continue
                os.makedirs(folder)
                for language, extension in self.languages.items():
                    solution_filename = self.get_solution_file(clean_title, extension)
                    filepath = os.path.join(folder+os.sep, solution_filename)
                    with open(filepath, "w") as solution_file:
                        header = self.get_file_header(title, language)
                        solution_file.write(header)
                data.append((title, folder[3:]))
        return data

    def write_readme_table(self, data, table_filename):
        with open(table_filename, "w") as table_file:
            table_file.write("| Challenge | Solution |\n")
            table_file.write("| --- | --- |\n")
            for row in data:
                title = row[0]
                solution = "[Solution]({})".format(row[1])
                table_file.write("| {} | {} |\n".format(title, solution))

if __name__ == '__main__':
    utility = Utility()
    data = utility.create_blank_solution_files()
    print("Blank solution files are created in {}".format(utility.solution_root[3:]))
    readme_table_file = "../table.md"
    if data:
        utility.write_readme_table(data, readme_table_file)
    print("Readme table is created in {}".format(readme_table_file[3:]))
