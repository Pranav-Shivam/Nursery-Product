import os

def print_files_in_folder(folder_path):
  """Prints the names of all files in the specified folder.

  Args:
    folder_path: The path to the folder.
  """

  for file_name in os.listdir(folder_path):
    if os.path.isfile(os.path.join(folder_path, file_name)):
      print(file_name)

if __name__ == "__main__":
  folder_path = input("Enter the folder path: ")
  print_files_in_folder(folder_path)